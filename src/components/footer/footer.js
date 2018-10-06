import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        console.log('footer', this.props);
        return (
            <div className="footer-content">
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
