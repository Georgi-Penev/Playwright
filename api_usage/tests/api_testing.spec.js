import { test, expect, request } from '@playwright/test'
import users from '../test-data/usersResponse.json'

test.describe('API Verification', () => {
    test('should verify multiple records returned against stored static response', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=1')
        const responseBody = await response.json()
        expect(response.status()).toBe(200)
        expect(responseBody).toEqual(users)
    })
    test('should verify single records returned against stored static response', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2')
        const responseBody = await response.json()
        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(2)
        expect(responseBody.data.email).toBe('janet.weaver@reqres.in')
        expect(responseBody.data.first_name).toBe('Janet')
        expect(responseBody.data.last_name).toBe('Weaver')
    })
    test('should verify POST request', async ({ request }) => {
        const newUser = {
            name: 'Georgi',
            job: 'QA Engineer'
        }
        const response = await request.post('https://reqres.in/api/users', { data: newUser })
        const responseBody = await response.json()
        expect(response.status()).toBe(201)
        expect(responseBody.name).toBe(newUser.name)
        expect(responseBody.job).toBe(newUser.job)
    })
    test('should verify PUT request', async ({ request }) => {
        const updatedUser = {
            name: 'Stanislav',
            job: 'Developer'
        }
        const response = await request.put('https://reqres.in/api/users/1', { data: updatedUser })
        const responseBody = await response.json()
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe(updatedUser.name)
        expect(responseBody.job).toBe(updatedUser.job)
    })
    test('should verify DELETE request', async ({ request }) => {

        const response = await request.delete('https://reqres.in/api/users/2')
        expect(response.status()).toBe(204)
        //Here should be a way to retrive the deleted user but the site updates the database so the user is always there.
        // const deletedResponse = await request.get('https://reqres.in/api/users/2')
        // expect(response.status()).toBe(404)
    })
})
