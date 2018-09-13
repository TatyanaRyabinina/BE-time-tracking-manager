import { CustomerDto } from '../../modules/customers/dto/customer.dto';
import { BasicMock } from './BaseMock';

export const creatingCustomer = {
  customerName: 'TestCustomerName',
  contacts: 'test test',
};

export const existingCustomer = {
  id: 1,
  customerName: 'ExistingCustomerName',
  contacts: 'test test',
};

this.existingCustomer.destroy = () => {
  return 1;
};

this.existingCustomer.update = (data: CustomerDto) => {
  return data;
};

export const customerProfileData = {
  customerName: 'UpdatingCustomerName',
  contacts: 'update test contacts',
};

export default new BasicMock(existingCustomer);