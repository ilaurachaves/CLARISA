import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('geopositions')
export class Geoposition extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'double', nullable: false })
  latitude: number;

  @Column({ type: 'double', nullable: false })
  longitude: number;
}
