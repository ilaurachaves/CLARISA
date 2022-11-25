import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageApiService } from '../../../../../../services/manage-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown/dropdown';

@Component({
  selector: 'app-form-new-institution',
  templateUrl: './form-new-institution.component.html',
  styleUrls: ['./form-new-institution.component.scss'],
})
export class FormNewInstitutionComponent implements OnInit {
  cities: any[];
  selectedCity: any = '';
  type: any[];
  selectedType: string = '';
  subType: any[];
  selectSubtype: string;
  subsType: any[];
  selectSubstype: string;
  group: FormGroup;
  msgs: Message[] = [];
  display: boolean = false;

  constructor(
    private _manageApiService: ManageApiService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {
    this.group = this.formBuilder.group({
      name: ['', Validators.required],
      acronym: '',
      institutionTypeCode: [null, Validators.required],
      hqCountryIso: ['', Validators.required],
      websiteLink: '',
      misAcronym: ['CLARISA', Validators.required],
      externalUserMail: ['a', Validators.required],
      externalUserName: '',
      externalUserComments: '',
      category_1: '',
      category_2: '',
      institutionHelpOne: '',
      institutionHelpTwo: '',
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.type = [];
    this.subType = [];
    this.subsType = [];
    this.cities = [];
    this._manageApiService.getAllTypeInstitutions().subscribe((resp) => {
      this.type.push(resp);
      console.log(this.type);
    });
    this._manageApiService.getAllCountries().subscribe((resp) => {
      this.cities.push(resp);
    });
  }

  selectType(types: any) {
    if (types != null) {
      this.subsType = [];
      this.subType = [];
      this.subType = types.children;
    } else {
      this.subsType = [];
      this.subType = [];
    }
    let numberInst: number = parseInt(types.code);
    this.group.controls['institutionTypeCode'].setValue(numberInst);
  }

  selectSubType(types: any) {
    if (types != null) {
      this.subsType = [];
      this.subsType = types.children;
    } else {
      this.subsType = [];
    }
    let numberInst: number = parseInt(types.code);
    this.group.controls['institutionTypeCode'].setValue(numberInst);
  }

  onSubmit(value) {
    let miStorage = window.localStorage.getItem('user');
    miStorage = JSON.parse(miStorage);
    if (this.group.valid) {
      this.confirmationService.confirm({
        message: 'Are you sure you want to add this new institution?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          if (
            typeof value.institutionTypeCode == 'object' &&
            value.institutionTypeCode != '' &&
            value.institutionTypeCode != null
          ) {
            let numberInst: number = parseInt(value.institutionTypeCode.code);
            this.group.controls['institutionTypeCode'].setValue(numberInst);
          } else if (
            typeof value.institutionHelpTwo == 'object' &&
            value.institutionHelpTwo != '' &&
            value.institutionHelpTwo != null
          ) {
            let numberInst: number = parseInt(value.institutionHelpTwo.code);
            this.group.controls['institutionTypeCode'].setValue(numberInst);
          } else {
            let numberInst: number = parseInt(value.institutionHelpOne.code);
            this.group.controls['institutionTypeCode'].setValue(numberInst);
          }
          this.group.controls['hqCountryIso'].setValue(
            value.hqCountryIso.isoAlpha2
          );

          this.group.controls['externalUserName'].setValue(miStorage['name']);
          this.group.controls['externalUserMail'].setValue(
            'g.martinez@cgiar.org'
          );
          this.group.removeControl('institutionHelpOne');
          this.group.removeControl('institutionHelpTwo');

          this._manageApiService
            .postNewRequestIntitution(this.group.value)
            .subscribe((resp) => {
              console.log(resp);
            });

          this.group = this.formBuilder.group({
            name: ['', Validators.required],
            acronym: '',
            institutionTypeCode: [null, Validators.required],
            hqCountryIso: ['', Validators.required],
            websiteLink: '',
            misAcronym: ['CLARISA', Validators.required],
            externalUserMail: ['a', Validators.required],
            externalUserName: '',
            externalUserComments: '',
            category_1: '',
            category_2: '',
            institutionHelpOne: '',
            institutionHelpTwo: '',
          });

          this.msgs = [
            {
              severity: 'info',
              summary: 'Confirmed',
              detail: 'You have accepted',
            },
          ];
        },
        reject: () => {
          this.msgs = [
            {
              severity: 'info',
              summary: 'Rejected',
              detail: 'You have rejected',
            },
          ];
        },
      });
    } else {
      this.display = true;
    }
  }

  isArray(list) {
    return Array.isArray(list);
  }
}
