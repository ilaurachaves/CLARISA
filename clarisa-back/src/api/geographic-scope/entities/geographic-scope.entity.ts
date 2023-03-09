import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Source } from '../../source/entities/source.entity';

@Entity('geographic_scopes')
export class GeographicScope extends AuditableEntity {
  @Expose({ name: 'code' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Exclude()
  @Column({ type: 'text', nullable: true })
  iati_name: string;

  @Column({ type: 'text', nullable: true })
  definition: string;

  //relations

  @Column({ type: 'bigint', nullable: false })
  source_id: number;

  //object relations

  @Exclude()
  @ManyToOne(() => Source, (s) => s.geographic_scope_array)
  @JoinColumn({ name: 'source_id' })
  source_object: Source;
}
