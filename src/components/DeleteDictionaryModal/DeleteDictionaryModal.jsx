import { useState } from 'react';
import { DeleteDictionaryModalStyles } from './DeleteDictionaryModalStyles.styled';
import operations from '../../redux/user/operations';
import { useDispatch } from 'react-redux';
import { LoaderCircle } from 'lucide-react';

const DeleteDictionaryModal = ({ toggleModal, tl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function onDeletePress() {
    setIsLoading(true);
    await dispatch(operations.deleteDictionary(tl));
    setIsLoading(false);
  }

  return (
    <DeleteDictionaryModalStyles>
      <h2>
        Are you sure you want to delete this dictionary? All progress will be
        lost and cannot be restored.
      </h2>
      <div>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => toggleModal(false)}
        >
          Cancel
        </button>
        <button type="button" className="accept-btn" onClick={onDeletePress}>
          {isLoading ? (
            <LoaderCircle size={16} className="spinner" />
          ) : (
            'Accept'
          )}
        </button>
      </div>
    </DeleteDictionaryModalStyles>
  );
};

export default DeleteDictionaryModal;
