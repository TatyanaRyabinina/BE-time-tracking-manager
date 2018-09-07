import { BasicResponse } from '../../../core/responses/basic.response';
import Customer from '../../../models/Customer';
import { DefinitionProperty } from '../../../swagger';

export class CustomerResponse extends BasicResponse<Customer> {
  @DefinitionProperty()
  public data: Customer;
}