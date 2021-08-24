import PropTypes from 'prop-types'

function Button({ color,text}) {

    const onClick = (e) => {
        console.log('click')
    }

    return (
        <div>
            <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
