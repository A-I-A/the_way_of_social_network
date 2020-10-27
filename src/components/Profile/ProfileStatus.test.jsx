import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatusComponent", ()=>{ 
    test("status from props should be in state",()=>{
        const component = create(<ProfileStatus status="OK"/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("OK");
    })

})

