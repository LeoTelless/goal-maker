import { mockPendingGoals } from './mock-data'

export interface GetPendingGoalsResponse {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
  try {
    const response = await fetch('http://localhost:3333/pending-goals')
    
    if (!response.ok) {
      throw new Error('Backend not available')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.warn('Backend não está disponível, usando dados mock:', error)
    return mockPendingGoals
  }
}
