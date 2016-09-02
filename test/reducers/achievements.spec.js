import expect from 'expect'
import { addAchievement } from '../../src/actions'
import achievements from '../../src/reducers/achievements'

describe('achievements reducer', () => {
    it('should add new achievement', () => {
        const beforeState = [
            {
                id: 1,
                text: 'text1'
            },
            {
                id: 2,
                text: 'text2'
            }
        ]

        const newAchText = 'new cool achievement'
        const afterState = [
            {
                id: 1,
                text: 'text1'
            },
            {
                id: 2,
                text: 'text2'
            },
            {
                id: 3,
                text: newAchText
            }
        ]

        expect(achievements(beforeState, addAchievement(3, newAchText))).toEqual(afterState);
    })
})
