import React, { Component } from 'react';
import moment from 'moment';

import { Modal } from '../common/modal';

export class ActivityRow extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    }
  }

  openModal = (e) => {
    if(!e.target.dataset.close) {
      this.setState({
        modalOpen: true
      });
    }
  }

  closeModal = (e) => {
    if(e.target.dataset.close) {
      this.setState({
        modalOpen: false
      });
    }
  }

  render() {
    const { receipt } = this.props;
    const time = receipt.transaction['unix-timestamp'];

    return (
      <div>
        <div className="activity">
          <div className="activity-header">
            {moment.unix(time).format('DD MMMM YYYY')}
          </div>
          <div className="activity-body" onClick={this.openModal}>

            <div data-close className={`modal-bg ${this.state.modalOpen ? 'open' : ''}`} onClick={this.closeModal}></div>

            {
              this.state.modalOpen
                ? <Modal closeModal={this.closeModal} receipt={receipt}/>
                : null
            }

            <div>
              <div className="icon-activity_tick"></div>
              <div className="icon-user_selfie_ph"></div>
            </div>
            <div style={{padding: '0 20px'}}>
              <div>Yoti Shared</div>
            </div>
            <div style={{float: 'right'}}>
              <div className="activity-time">
                <p className="p3">
                  {moment.unix(time).format('HH:mm')}
                </p>
                <p className="p3">
                  {moment.unix(time).format('DD MMMM YYYY')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
