import { expect, describe, it, beforeEach } from 'vitest'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { InMemoryQuestionRepository } from '@/repositories/in-memory-question-repository'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteudo da pergunta',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id)
  })
})
