export const mockSummary = {
  summary: {
    completed: 2,
    total: 5,
    goalsPerDay: {
      '2024-01-15': [
        {
          id: '1',
          title: 'Beber 2L de água',
          createdAt: '2024-01-15T10:00:00Z'
        }
      ],
      '2024-01-16': [
        {
          id: '2',
          title: 'Exercitar-se por 30 minutos',
          createdAt: '2024-01-16T07:00:00Z'
        }
      ]
    }
  }
}

export const mockPendingGoals = {
  pendingGoals: [
    {
      id: '3',
      title: 'Ler por 1 hora',
      desiredWeeklyFrequency: 5,
      completionCount: 2
    },
    {
      id: '4',
      title: 'Meditar',
      desiredWeeklyFrequency: 7,
      completionCount: 3
    },
    {
      id: '5',
      title: 'Estudar programação',
      desiredWeeklyFrequency: 3,
      completionCount: 0
    }
  ]
}
