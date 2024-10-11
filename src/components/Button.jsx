import PropTypes from "prop-types"

const Button = ({name, link, icon, width}) => {

    let style = "bg-btn-primary text-center py-2 md:py-3 px-5 text-sm md:text-base text-white font-Poppins font-medium rounded-md text-md hover:bg-btn-hover transition-all flex items-center justify-center gap-4 md:gap-5"
    if(width){
        style = "bg-btn-primary text-center py-2 md:py-3 px-5 text-sm md:text-base text-white font-Poppins font-medium rounded-md text-md hover:bg-btn-hover transition-all flex items-center justify-center gap-4 md:gap-5 w-full md:w-" + width
    }

  return (
    <a href={link} className={style}>
        {icon && <img src={icon} alt="" />}
        {name}
    </a>
  )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string,
    width: PropTypes.string
}

Button.defaultProps = {
    name: "Button",
    link: "https://google.com"
}
export default Button