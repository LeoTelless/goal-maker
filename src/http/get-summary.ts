import { mockSummary } from './mock-data'

export interface GetSummaryResponse {
  summary: {
    completed: number
    total: number
    goalsPerDay: Record<
      string,
      {
        id: string
        title: string
        createdAt: string
      }[]
    >
  }
}

export async function getSummary(): Promise<GetSummaryResponse> {
  try {
    const response = await fetch('http://localhost:3333/summary')
    
    if (!response.ok) {
      throw new Error('Backend not available')
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.warn('Backend não está disponível, usando dados mock:', error)
    return mockSummary
  }
}
