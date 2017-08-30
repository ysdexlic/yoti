import React, { Component } from 'react';
import moment from 'moment';

import selfie from '../../../assets/selfie.png';

export class Modal extends Component {

  close = () => {
    this.props.closeModal();
  }

  render() {
    const { receipt } = this.props;
    const { type } = receipt;
    const { attributes } = receipt.transaction;

    if (type === 'application') {
      const bgColor = receipt.application.appearance['bg-color'];
      let bgImg = typeof receipt.application.appearance['bg-img'] !== 'undefined'
                  ? receipt.application.appearance['bg-img']
                  : receipt.application.appearance['bg-logo'];

      var headerStyle = {
        backgroundColor: receipt.application.appearance['bg-color'],
        backgroundImage: 'url(' + bgImg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '5em'
      }
    }

    return (
      <div className="activity-modal">
        <div>
          <div data-close className="close-icon icon-action_close_dark-ve" onClick={this.close}></div>
          {
            type !== "share"
              ? <div className="activity-modal_header" style={headerStyle}></div>
              : null
          }
          <div className="activity-modal_body">
            <div className="information">
              <div className="icon-selfie">
                {
                  type === 'application'
                    ? <img className="selfie" src={selfie}/>
                    : <div className="icon-user_selfie_ph_medium"></div>
                }
                <div className="icon-logo_circle"></div>
              </div>

              <div style={{margin: 'auto'}} className="icon-receipt_confirmed"></div>
              <h6>
                {
                  type !== "application"
                    ? "Yoti Shared"
                    : "Simple Yoti SDK App"
                }
              </h6>
              <div>
                {
                  type !== "application"
                    ? null
                    : "viewed this information about you"
                }
              </div>
              <div>at {moment.unix(receipt.transaction['unix-timestamp']).format('HH:mm [on] DD MMMM YYYY')}</div>
            </div>
            <hr />
            <div className="attributes">
              {
                attributes.map((attribute, i) => {
                  return (
                    <div key={i}>
                      {
                        Object.keys(attribute).map((key, x) => {
                          if(key === 'selfie') {
                            return (
                              <div key={x}>
                                <div className='title'>{key.replace("-"," ")}</div>
                                {attribute[key] !== true ? <img src={attribute[key]} /> : <div className="icon-user_selfie_ph_medium"></div> }
                              </div>
                            )
                          }
                          return (
                            <div key={x}>
                              <div className='title'>{key.replace("-"," ")}</div>
                              <div className='name'>{attribute[key]}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
