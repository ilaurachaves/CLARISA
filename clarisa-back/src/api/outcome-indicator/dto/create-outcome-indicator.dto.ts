import { AuditableDto } from 'src/shared/entities/dtos/auditable-dto';

export class CreateOutcomeIndicatorDto extends AuditableDto {
  smo_code: string;

  outcome_indicator_statement: string;
}
