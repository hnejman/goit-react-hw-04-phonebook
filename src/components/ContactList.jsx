import PropTypes from 'prop-types';

export const ContactList = ({ contacts, searchBy, deleteItem }) => {
  const elements = contacts.filter(ele => {
    return (
      ele.name.toLowerCase().includes(searchBy.toLowerCase()) ||
      ele.number.includes(searchBy)
    );
  });

  if (elements.length) {
    return (
      <ul>
        {elements.map(ele => {
          return (
            <li key={ele.id} id={ele.id}>
              {ele.name + ': ' + ele.number}
              <button
                onClick={e => {
                  deleteItem(e);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  searchBy: PropTypes.string,
  deleteItem: PropTypes.func.isRequired,
};
