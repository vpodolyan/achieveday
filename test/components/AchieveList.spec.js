import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import AchieveList from '../../src/components/AchieveList.js'

function setup(achieves) {
    achieves = achieves || []

    const component = shallow(
        <AchieveList achieves={achieves} />
    )

    return { component }
}

describe('AchieveList component', () => {
    it('should contain right count of the achievements', () => {
        const achieves = [{id: 1, text: "Super achievement"}, {id:2, text:"OMG I did it"}]
        const { component } = setup(achieves);
        expect(component.find('Achievement').length).toBe(achieves.length);
    })
})
