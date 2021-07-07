import * as React from 'react';

import '../../css/form_styles.css';
import { RegisterMemberDto } from '../../services/dto/register-member.dto';

const MemberDetails: React.FC<{ details: RegisterMemberDto[]; onDelete }> = ({
  details,
  onDelete,
}) => {
  return (
    <>
      {details?.length > 0 &&
        details.map((item, key) => (
          <div className="details-container" key={key}>
            <div className="row">
              <div>Staff Name</div>
              <div>{item.name}</div>
            </div>
            <div className="row">
              <div>Staff Mobile Number</div>
              <div>{item.phoneNumber}</div>
            </div>
            <div className="row">
              <div>Staff Email</div>
              <div>{item.email}</div>
            </div>
            <button className="delete-btn" onClick={() => onDelete(item)}>
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default MemberDetails;
