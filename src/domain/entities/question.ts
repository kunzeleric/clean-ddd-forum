import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  content: string;
  title: string;
  slug: Slug;
  authorId: string;
}

export class Question extends Entity<QuestionProps> {}
