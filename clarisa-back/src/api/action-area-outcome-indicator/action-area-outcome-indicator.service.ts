import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateActionAreaOutcomeIndicatorDto } from './dto/create-action-area-outcome-indicator.dto';
import { UpdateActionAreaOutcomeIndicatorDto } from './dto/update-action-area-outcome-indicator.dto';
import { ActionAreaOutcomeIndicator } from './entities/action-area-outcome-indicator.entity';
import { ActionAreaOutcomeIndicatorRequestDto } from  './dto/action-area-outcome-indicator-request.dto'
import { ActionAreaOutcomeIndicatorRepository } from './repositories/action-area-outcome-indicator-repository';

@Injectable()
export class ActionAreaOutcomeIndicatorService {
  constructor(
    private actionAreaOutcomeIndicatorsRepository: ActionAreaOutcomeIndicatorRepository,
  ) {}

  async findAll(option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,): Promise<ActionAreaOutcomeIndicatorRequestDto[]> {


    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.actionAreaOutcomeIndicatorsRepository.actionAreaOutcomeIndicatorByAll();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.actionAreaOutcomeIndicatorsRepository.actionAreaOutcomeIndicatorByAllIsActive(option);
          
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<ActionAreaOutcomeIndicator> {
    return await this.actionAreaOutcomeIndicatorsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateActionAreaOutcomeIndicatorDto: UpdateActionAreaOutcomeIndicatorDto[]) {
    return await this.actionAreaOutcomeIndicatorsRepository.save(updateActionAreaOutcomeIndicatorDto);
  }
}
