import NotFoundException from '../../core/exceptions/not-found.exception';
import {
  creatingCustomer,
  existingCustomer,
  customerProfileData,
  CUSTOMER_ID,
} from '../../models/__mocks__/Customer';
import CustomerService from './customers.service';

jest.mock('../../models/Customer');

describe('customers.service test', () => {
  it('findCustomerById method success', async () => {
    const foundCustomer = await CustomerService.findCustomerById(CUSTOMER_ID);
    expect(foundCustomer.contacts).toEqual(existingCustomer.contacts);
  });

  it('findCustomerById throw NotFoundException', async () => {
    try {
      await CustomerService.findCustomerById(8);
      expect(false).toBeTruthy();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });

  it('createCustomer method success', async () => {
    const createdCustomer = await CustomerService.createCustomer(creatingCustomer);
    expect(createdCustomer.customerName).toEqual(creatingCustomer.customerName);
  });

  it('removeCustomer method success', async () => {
    const removedCustomer = await CustomerService.removeCustomer(CUSTOMER_ID);
    expect(removedCustomer).toEqual('user was deleted');
  });

  it('updateCustomerInfo method success', async () => {
    const updatedCustomer = await CustomerService.updateCustomerInfo(CUSTOMER_ID, customerProfileData);
    expect(updatedCustomer.customerName).toEqual(customerProfileData.customerName);
  });

  it('getAllCustomers method success', async () => {
    const allCustomers = await CustomerService.getAllCustomers();
    expect(allCustomers[0].id).toEqual(1);
  });
});