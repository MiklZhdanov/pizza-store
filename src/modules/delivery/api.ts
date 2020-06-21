import { request } from 'modules/api/request';

export const delivery = {
    getDeliveries: async () =>
    await request.get(`/deliveries`)
};
