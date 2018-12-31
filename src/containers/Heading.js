import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/Heading.scss';
import actions from '../actions/index';

class Heading extends React.Component{

  constructor(props){
    super(props);

    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOutButton = (e, { name }) => {
    let { logOutUser } = this.props;
    logOutUser();
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    const { name, picture } = this.props.userData.payload;
    return (
      <div data-test='heading'>
       <Menu pointing secondary className={'heading-menu'}>
          <Menu.Menu position='left' className={"heading-menu-profile-image"}>
              <Header as='h2'>
              <Image circular src={picture.thumbnail} />
              { name.first }
              </Header>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
             name='home'
             active={activeItem === 'home'}
             onClick={this.handleItemClick}
             />
            <Menu.Item
              name='messages'
              link={true}
              as={ Link }
              to="/Messaging_Inbox"
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
             />

            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleLogOutButton}
             />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logOutUser: actions['logOutUser'] }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
