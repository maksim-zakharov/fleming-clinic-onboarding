import * as React from 'react';

import '../../css/form_styles.css';
import { PcrTestTypesDto } from '../../services/dto/pcr-test-types.dto';

const RoomDetails: React.FC<{ details: PcrTestTypesDto[]; onDelete }> = ({
  details,
  onDelete,
}) => {
  return (
    <>
      {' '}
      {details?.length > 0 &&
        details.map((item, key) => (
          <div className="details-container" key={key}>
            <div className="row">
              <div>PCR Test Type</div>
              <div>{item.pcrTestName}</div>
            </div>
            <div className="row">
              <div>Room Type (Arabic)</div>
              <div>{item.pcrTestNameArab || '-'}</div>
            </div>
            <div className="row">
              <div>Price</div>
              <div>{item.price} CMR</div>
            </div>
            <div className="row">
              <div>Room Description</div>
              <div>{item.pcrTestDescription}</div>
            </div>
            <div className="row">
              <div>Room Description (Arabic)</div>
              <div>{item.pcrTestDescriptionArab}</div>
            </div>
            <button className="delete-btn" onClick={() => onDelete(item)}>
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default RoomDetails;
