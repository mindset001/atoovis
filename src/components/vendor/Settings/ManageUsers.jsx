import React, {useState} from "react";
import '../../../styles/settings/manage.css'
import Manager from '../../../components/vendor/Settings/Manage/Manager'
import {CiFilter, CiSettings} from 'react-icons/ci'
import {GrFormAdd} from 'react-icons/gr'
import scan from '../../../assets/images/Header/scan.png'
import Modal from 'react-modal';

const ManageUsers=()=>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
        padding: 0,
          bottom: 'auto',
          borderRadius: 50,
          marginRight: '-50%',
         
          transform: 'translate(-50%, -50%)',
        },
      };
      let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function handleModal() {
    setModal(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  function closeMode() {
    setModal(false);
  }
    return(
        <div>
            <div className="manage">
                <h1>Manage Users</h1>
                <div className="use">
                    <div className="team">
                        <h2>Team Members  <span>(1)</span></h2>
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: 10}}> <CiFilter/><p>Filters</p></div>
                    </div>
                    <div className="team">
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: 10}}> <CiSettings/><p>Manage Roles</p></div>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: 10, cursor: 'pointer'}} onClick={handleModal}> <CiFilter/><p>Enforce 2FA</p></div>
                    <button style={{display: 'flex', alignItems: 'center', marginLeft: 10}} onClick={openModal}> <GrFormAdd/><p>Invite Member</p></button>
                    </div>
                </div>
                <Manager/>
            </div>
            <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      > 
        <div className="mode">
                <h1>Invite Member</h1>
                <form action="">
                    <div className="divi">
                        <label htmlFor="">Email Address</label>
                        <input type="text" placeholder="e.g johndoe@email.com" />
                    </div>
                    <div className="divi">
                        <label htmlFor="">Role</label>
                        <input type="text" placeholder="e.g johndoe@email.com" />
                    </div>
                    <div>
                        <button className="btnn">Cancel</button>
                        <button className="btnnn">Invite Member</button>
                    </div>
                </form>
        </div>
     
      </Modal>
      <Modal
        isOpen={modal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeMode}
        style={customStyles}
        contentLabel="Example Modal"
        // className=" mode"
      > 
        <div className="mode">
          <div onClick={closeMode} style={{cursor: 'pointer'}}>
            <p style={{textAlign: 'right'}}>X</p>
          </div>
                <h1>Enable Two-Factor Authentication</h1>
                <ol>
                  <li>To enable 2FA, you need to 
                    install an authenticator app like Authy, or Google Authenticator.</li>
                    <li>To add/renew timebased password, open the authenticator 
                      app and scan the QR code below.</li>

                      <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                      <img src={scan} alt="" />
                      <p>Secret Token</p>
                      <h2>HFME02ZELFRTRSTBHSYTYS</h2>
                      </div>
                      <li>Enter the time based password 
                        generated by the app below and click confirm to activate</li>
                </ol>
                <form action="">
                   
                    <div className="divi">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter generated password" />
                    </div>
                    <div>
                        <button className="btnn">Cancel</button>
                        <button className="btnnn">Enable</button>
                    </div>
                </form>
        </div>
     
      </Modal>
        </div>
    )
}

export default ManageUsers