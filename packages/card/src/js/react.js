/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * card function
 *
 * A container for all types of content
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * The card  component
 *
 * @param {string}   link               - The link that clicking the card goes to
 * @param {bool}     shadow             - Adds a box shadow to card if true
 * @param {bool}     centred            - Aligns all text to center if true
 * @param {bool}     clickable          - Aligns all text to center if true
 * @param {bool}     dark               - Dark theme variation
 * @param {bool}     alt                - Light theme variation
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
const AUcard = ({ link, shadow, centred, dark, alt, clickable, className, children, ...attributesOptions }) => {
	let CardContainer = 'div';

	if( link !== undefined ) {
		CardContainer = 'a';
		attributesOptions.href = link;
	}

	let cardTheme = "";

	if ( dark || alt ) {
		cardTheme = `au-body ${ dark ? "au-body--dark" : "" } ${ alt ? "au-body--alt" : ""}`
	}

	return (
		<CardContainer className={`au-card ${className} ${cardTheme}` +
								`${shadow ? 'au-card--shadow' : ''} ` +
								`${centred ? 'au-card--centred' : ''} ` +
								`${clickable ? 'au-card--clickable' : ''}`}
								{...attributesOptions}
								>
			{children}
		</CardContainer>
	)
};

AUcard.propTypes = {
	link: PropTypes.string,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	shadow: PropTypes.bool,
	centred: PropTypes.bool,
	className: PropTypes.string,
};

AUcard.defaultProps = {
	shadow: false,
	centred: false,
	clickable: false,
	dark: false,
	alt: false,
	className: ''
};


/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardInner = ({ className, children, ...attributesOptions }) => (
	<div className={`au-card__inner ${className}`} {...attributesOptions}>
		{children}
	</div>
);

AUcardInner.propTypes = {
	className: PropTypes.string
}

AUcardInner.defaultProps = {
	className: ''
}


/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardHeader = ({ className, level, alt, dark, children, ...attributesOptions }) => {

	let headerTheme = "";

	if ( dark || alt ) {
		headerTheme = `au-body ${ dark ? "au-body--dark" : "" } ${ alt ? "au-body--alt" : ""}`
	};

	if ( level ) {
		const HeadingTag = `h${ level }`;
		return (
			<div className={headerTheme} {...attributesOptions}>
				<HeadingTag className={`au-card__header`}>{children}</HeadingTag >
			</div>
		)
	} else {
	return (
		<div className={`au-card__header ${ headerTheme } ${className}`} {...attributesOptions}>
			{children}
		</div>
	)
	}
};

AUcardHeader.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
}

AUcardHeader.defaultProps = {
	className: '',
	dark: false,
	alt: false,
}


/**
 * An image inside the card
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardImage = ({ src,className, ...attributesOptions }) => (
	<img className={`au-card__image ${className}`} src={ src } {...attributesOptions} />
);

AUcardImage.propTypes = {
	src: PropTypes.string.isRequired,
	className: PropTypes.string
};

AUcardImage.defaultProps = {
	className: ''
};


/**
 * A horizontal rule used to divide content inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardDivider = ({ className, ...attributesOptions }) => (
	<hr className={`au-card__divider ${className}`} {...attributesOptions} />
);

AUcardDivider.propTypes = {
	className: PropTypes.string
};

AUcardDivider.defaultProps = {
	className: ''
};



/**
 * Use when making the entire click area of card clickable.
 * @param {string}   link               - The location of the link
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardLink = ({ link, text, className, ...attributesOptions }) => (
	<a href={link} className={`au-card--clickable__link ${className}`} {...attributesOptions}>
		{text}
	</a>
);

AUcardLink.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string
};

AUcardLink.defaultProps = {
	className: ''
};



/**
 * The footer section of the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardFooter = ({ dark, alt, children, className, ...attributesOptions }) => {


	let footerTheme = "";

	if ( dark || alt ) {
		footerTheme = `au-body ${ dark ? "au-body--dark" : "" } ${ alt ? "au-body--alt" : ""}`
	};

	return (
		<div className={`au-card__footer ${footerTheme} ${className}`} {...attributesOptions}>
			{children}
		</div>
)};

AUcardFooter.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
}

AUcardFooter.defaultProps = {
	className: '',
	dark: false,
	alt: false,
}



/**
 * The footer section of the card
 * @param {string}   level              - The tag level (<h1/> <h2/> etc)
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const AUcardTitle = ({ children, className, level, ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<HeadingTag className={ `au-card__title ${ className }` } { ...attributeOptions }>{ children }</HeadingTag>
	);
};

AUcardTitle.propTypes = {
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	className: PropTypes.string
};

AUcardTitle.defaultProps = {
	className: ''
};


export default AUcard;
