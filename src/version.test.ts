import { Version } from './version'

test('Version route', async () => {
	const v = Version('10')
	expect(v).toEqual({ version: '10' })
})
