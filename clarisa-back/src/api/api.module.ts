import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ActionAreaModule } from './action-area/action-area.module';
import { GlossaryModule } from './glossary/glossary.module';
import { ImpactAreaModule } from './impact-area/impact-area.module';
import { GlobalTargetsModule } from './global-targets/global-targets.module';
import { StudyTypeModule } from './study-type/study-type.module';
import { SdgModule } from './sdg/sdg.module';
import { SdgTargetModule } from './sdg-target/sdg-target.module';
import { ImpactAreaIndicatorsModule } from './impact-area-indicators/impact-area-indicators.module';
import { ProjectedBenefitProbabilityModule } from './projected-benefit-probability/projected-benefit-probability.module';
import { ProjectedBenefitModule } from './projected-benefit/projected-benefit.module';
import { ActionAreaOutcomeModule } from './action-area-outcome/action-area-outcome.module';
import { OutcomeIndicatorModule } from './outcome-indicator/outcome-indicator.module';
import { ActionAreaOutcomeIndicatorModule } from './action-area-outcome-indicator/action-area-outcome-indicator.module';
import { SourcesModule } from './sources/sources.module';
import { GeopositionModule } from './geoposition/geoposition.module';
import { RegionTypeModule } from './region-type/region-type.module';
import { RegionModule } from './region/region.module';
import { CountryModule } from './country/country.module';
import { DepthDescriptionModule } from './depth-description/depth-description.module';
import { ProjectedBenefitDepthModule } from './projected-benefit-depth/projected-benefit-depth.module';
import { ProjectedBenefitWeightDescriptionModule } from './projected-benefit-weight-description/projected-benefit-weight-description.module';
import { ProjectedBenefitWeightingModule } from './projected-benefit-weighting/projected-benefit-weighting.module';
import { GeneralAcronymModule } from './general-acronym/general-acronym.module';
import { InnovationReadinessLevelModule } from './innovation-readiness-level/innovation-readiness-level.module';
import { InvestmentTypeModule } from './investment-type/investment-type.module';
import { InnovationUseLevelModule } from './innovation-use-level/innovation-use-level.module';
import { CgiarEntityModule } from './cgiar-entity/cgiar-entity.module';
import { CgiarEntityTypeModule } from './cgiar-entity-type/cgiar-entity-type.module';
import { SdgIndicatorModule } from './sdg-indicator/sdg-indicator.module';
import { OneCgiarUserModule } from './one-cgiar-user/one-cgiar-user.module';
import { BeneficiarieModule } from './beneficiarie/beneficiarie.module';
import { BusinessCategoryModule } from './business-category/business-category.module';
import { TechnicalFieldModule } from './technical-field/technical-field.module';
import { InnovationTypeModule } from './innovation-type/innovation-type.module';
import { GovernanceTypeModule } from './governance-type/governance-type.module';
import { EnvironmentalBenefitModule } from './environmental-benefit/environmental-benefit.module';
import { TechnologyDevelopmentStageModule } from './technology-development-stage/technology-development-stage.module';
import { WorkpackageModule } from './workpackage/workpackage.module';
import { InitiativeModule } from './initiative/initiative.module';
import { AccountTypeModule } from './account-type/account-type.module';
import { AccountModule } from './account/account.module';
import { ScienceGroupModule } from './science-group/science-group.module';
import { UnitModule } from './unit/unit.module';
import { AdministrativeScaleModule } from './administrative-scale/administrative-scale.module';
import { GeographicScopeModule } from './geographic-scope/geographic-scope.module';
import { HomepageClarisaCategoryModule } from './homepage-clarisa-category/homepage-clarisa-category.module';
import { HomepageClarisaEndpointModule } from './homepage-clarisa-endpoint/homepage-clarisa-endpoint.module';
import { HomepageClarisaCategoryEndpointModule } from './homepage-clarisa-category-endpoint/homepage-clarisa-category-endpoint.module';
import { EndOfInitiativeOutcomesModule } from './end-of-initiative-outcomes/end-of-initiative-outcomes.module';
import { IntegrationModule } from 'src/shared/integration/integration.module';
import { MisModule } from './mis/mis.module';
import { InnovationCharacteristicModule } from './innovation-characteristic/innovation-characteristic.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [
    UserModule,
    RoleModule,
    ActionAreaModule,
    GlossaryModule,
    ImpactAreaModule,
    GlobalTargetsModule,
    StudyTypeModule,
    SdgModule,
    SdgTargetModule,
    ImpactAreaIndicatorsModule,
    ProjectedBenefitProbabilityModule,
    ProjectedBenefitModule,
    ActionAreaOutcomeModule,
    OutcomeIndicatorModule,
    ActionAreaOutcomeIndicatorModule,
    SourcesModule,
    CountryModule,
    GeopositionModule,
    RegionTypeModule,
    RegionModule,
    DepthDescriptionModule,
    ProjectedBenefitDepthModule,
    ProjectedBenefitWeightDescriptionModule,
    ProjectedBenefitWeightingModule,
    GeneralAcronymModule,
    InnovationReadinessLevelModule,
    InvestmentTypeModule,
    InnovationUseLevelModule,
    CgiarEntityModule,
    CgiarEntityTypeModule,
    SdgIndicatorModule,
    OneCgiarUserModule,
    BeneficiarieModule,
    BusinessCategoryModule,
    TechnicalFieldModule,
    InnovationTypeModule,
    GovernanceTypeModule,
    EnvironmentalBenefitModule,
    TechnologyDevelopmentStageModule,
    WorkpackageModule,
    InitiativeModule,
    AccountTypeModule,
    AccountModule,
    ScienceGroupModule,
    UnitModule,
    AdministrativeScaleModule,
    GeographicScopeModule,
    HomepageClarisaCategoryModule,
    HomepageClarisaEndpointModule,
    HomepageClarisaCategoryEndpointModule,
    EndOfInitiativeOutcomesModule,
    IntegrationModule,
    MisModule,
    InnovationCharacteristicModule,
  ],
})
export class ApiModule {}
