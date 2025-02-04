import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { CountryOfficeRequest } from '../../country-office-request/entities/country-office-request.entity';
import { Geoposition } from '../../geoposition/entities/geoposition.entity';
import { InstitutionLocation } from '../../institution/entities/institution-location.entity';
import { PartnerRequest } from '../../partner-request/entities/partner-request.entity';
import { WorkpackageCountry } from '../../workpackage/entities/workpackage-country.entity';
import { CountryRegion } from './country-region.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 64, nullable: false })
  iso_alpha_2: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 64, nullable: false })
  iso_alpha_3: string;

  @Index({ unique: true })
  @Column({ type: 'bigint', nullable: false })
  iso_numeric: number;

  //relations

  @Column({ type: 'bigint', nullable: true })
  geoposition_id: number;

  //object relations

  @ManyToOne(() => Geoposition)
  @JoinColumn({ name: 'geoposition_id' })
  geoposition_object: Geoposition;

  @OneToMany(() => CountryRegion, (cr) => cr.country_object)
  country_region_array: CountryRegion[];

  @OneToMany(() => InstitutionLocation, (il) => il.country_object)
  institution_locations: InstitutionLocation[];

  @OneToMany(() => PartnerRequest, (pr) => pr.institution_type_object)
  partner_requests: PartnerRequest[];

  @OneToMany(() => CountryOfficeRequest, (cof) => cof.country_object)
  country_office_requests: CountryOfficeRequest[];

  @OneToMany(() => WorkpackageCountry, (wpc) => wpc.country_object)
  work_package_country_array: WorkpackageCountry[];

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
