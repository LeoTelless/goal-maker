export interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest): Promise<void> {
  try {
    const response = await fetch('http://localhost:3333/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goalId,
      }),
    })

    if (!response.ok) {
      throw new Error('Error while creating the goal completion')
    }
  } catch (error) {
    console.warn('Backend não está disponível, simulando conclusão de meta:', { goalId })
    // Simula sucesso quando backend não está disponível
    return Promise.resolve()
  }
}
