import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryQuestionRepository } from '@/repositories/in-memory-question-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { makeQuestion } from '@/factories/make-question'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create('exemplo-pergunta'),
    })

    inMemoryQuestionRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'exemplo-pergunta',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
  })
})
