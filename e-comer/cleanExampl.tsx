/**
 * src/
├── api/
│   ├── client.js          # HTTP client configuration
│   ├── endpoints.js       # API endpoints definitions
│   └── services/         # API service functions
├── hooks/
│   ├── useApi.js         # Custom API hook
│   └── useLocalStorage.js # Local storage hook
├── utils/
│   ├── storage.js        # Storage utilities
│   └── validation.js     # Data validation
├── contexts/
│   └── AppContext.js     # Global state management
└── components/
 */

//  HTTP Client Configuration
// api/client.js
import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient

///////////////////////////////////////////////////////////////////////////////////

// api/services/userService.js
import apiClient from '../client'

export const userService = {
  // Get all users
  getUsers: async (params = {}) => {
    try {
      const response = await apiClient.get('/users', { params })
      return response
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error.message}`)
    }
  },

  // Get user by ID
  getUserById: async (id) => {
    try {
      const response = await apiClient.get(`/users/${id}`)
      return response
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error.message}`)
    }
  },

  // Create user
  createUser: async (userData) => {
    try {
      const response = await apiClient.post('/users', userData)
      return response
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`)
    }
  },
}
///////////////////////////////////////////////////////////////////////////////////

// utils/storage.js
export const storage = {
  // Get item from localStorage
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error)
      return defaultValue
    }
  },

  // Set item in localStorage
  set: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error(`Error setting ${key} in localStorage:`, error)
    }
  },

  // Remove item from localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error)
    }
  },

  // Clear all items
  clear: () => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  },
}

///////////////////////////////////////////////////////////////////////////////////
// hooks/useApi.js
import { useState, useEffect, useCallback } from 'react'

export const useApi = (apiFunction, immediate = true) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState(null)

  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true)
        setError(null)
        const result = await apiFunction(...args)
        setData(result)
        return result
      } catch (err) {
        setError(err.message)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [apiFunction]
  )

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { data, loading, error, execute, setData }
}

///////////////////////////////////////////////////////////////////////////////////

// hooks/useLocalStorage.js
import { useState, useEffect } from 'react'
import { storage } from '../utils/storage'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.get(key)
      return item !== null ? item : initialValue
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      storage.set(key, valueToStore)
    } catch (error) {
      console.error(`Error setting ${key} in localStorage:`, error)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(initialValue)
      storage.remove(key)
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error)
    }
  }

  // Sync between tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== JSON.stringify(storedValue)) {
        setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key, storedValue, initialValue])

  return [storedValue, setValue, removeValue]
}
///////////////////////////////////////////////////////////////////////////////////

// hooks/useCachedApi.js
import { useApi } from './useApi'
import { useLocalStorage } from './useLocalStorage'
import { userService } from '../api/services/userService'

export const useCachedApi = (cacheKey, apiFunction, ttl = 5 * 60 * 1000) => {
  const [cachedData, setCachedData, removeCachedData] = useLocalStorage(
    cacheKey,
    null
  )
  const api = useApi(apiFunction, false)

  const isCacheValid = (cached) => {
    if (!cached || !cached.timestamp) return false
    return Date.now() - cached.timestamp < ttl
  }

  const executeWithCache = async (...args) => {
    // Check cache first
    if (cachedData && isCacheValid(cachedData)) {
      return cachedData.data
    }

    // Fetch fresh data
    const result = await api.execute(...args)

    // Update cache
    setCachedData({
      data: result,
      timestamp: Date.now(),
    })

    return result
  }

  const invalidateCache = () => {
    removeCachedData()
  }

  return {
    data: cachedData?.data || api.data,
    loading: api.loading,
    error: api.error,
    execute: executeWithCache,
    invalidateCache,
    refetch: api.execute,
  }
}

///////////////////////////////////////////////////////////

// components/UserList.js
import React from 'react'
import { useCachedApi } from '../hooks/useCachedApi'
import { userService } from '../api/services/userService'

const UserList = () => {
  const {
    data: users,
    loading,
    error,
    invalidateCache,
  } = useCachedApi('users_cache', userService.getUsers)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Users</h2>
      <button onClick={invalidateCache}>Refresh</button>

      {users?.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

///////////////////////////////////////////////////////////
// Using React Query (8. Advanced: React Query Alternative)
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '../api/services/userService'

const UserList = () => {
  const queryClient = useQueryClient()

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  const invalidateCache = () => {
    queryClient.invalidateQueries(['users'])
  }

  // ... rest of component
}
