import classes from "./footer.module.css"

function FooterComponent() {
    return (
        <footer>
            <div className={classes.footerContainer}>
                <div>
                    <h2>NONAME DIGITAL</h2>
                    <p>E-commerce Test project</p>
                </div>
                <p className={classes.footerDescription}>
                    Lorem ipsum dolor sit amet.<br/>Et totam minima aut corrupti repellat et rerum nulla.
                </p>
            </div>
        </footer>
    );
}

export default FooterComponent;
