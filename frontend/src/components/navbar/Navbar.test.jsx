import {shallow } from 'enzyme'
import Navbar from './Navbar'

it("expect to render Navbar component", ()=>{
    expect(shallow(<Navbar/>)).toEqual(1)
})