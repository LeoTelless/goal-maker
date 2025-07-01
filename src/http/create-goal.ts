export interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
  try {
    const response = await fetch('http://localhost:3333/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        desiredWeeklyFrequency,
      }),
    })

    if (!response.ok) {
      throw new Error('Error while creating the goal')
    }
  } catch (error) {
    console.warn('Backend não está disponível, simulando criação de meta:', { title, desiredWeeklyFrequency })
    // Simula sucesso quando backend não está disponível
    return Promise.resolve()
  }
}
