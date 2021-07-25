import TicTacToe from './app'
import {shallow, mount, render} from 'enzyme'

it('renders tictactoe without crashing', () => {
  shallow(<TicTacToe />);
});

it('renders game status correctly', () => {
  const wrapper = mount(<TicTacToe />)

  //X's Turn
  const xturn1 = wrapper.find('div.game-info').children().first().text()
  expect(xturn1).toEqual("X's Turn")
  const turn1 = wrapper.find('button.square').first()
  turn1.simulate('click')

  //O's Turn
  const oturn1 = wrapper.find('div.game-info').children().first().text()
  expect(oturn1).toEqual("O's Turn")
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')

  //X's Turn
  const xturn2 = wrapper.find('div.game-info').children().first().text()
  expect(xturn2).toEqual("X's Turn")
  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')

  //O's Turn
  const oturn2 = wrapper.find('div.game-info').children().first().text()
  expect(oturn2).toEqual("O's Turn")
  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')

  //X's Turn
  const xturn3 = wrapper.find('div.game-info').children().first().text()
  expect(xturn3).toEqual("X's Turn")
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')

  //Winner
  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('X Won')

  //X Winning in three moves
})

