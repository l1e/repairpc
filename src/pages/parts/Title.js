import React,{Fragment} from 'react';

import { withTranslation, Trans } from "react-i18next";
class  TitlePrepare extends React.Component{
    render(){
        return(
            <Fragment>
                {this.props.isheader === 'true' ? (
                    <div className="header-section-title">
                        <svg className="svg-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path className="elementor-shape-fill" d="M0,6V0h1000v20L0,6z"></path>
                        </svg>
                        <h2 className='header-section-title__title'>
                            <Trans i18nKey={this.props.titlei18nkey}>{this.props.titlei18text}</Trans>
                        </h2>
                    </div>
                ) : (
                    <h2 className='section-services__title section-title'>
                        <Trans i18nKey={this.props.titlei18nkey}>{this.props.titlei18text}</Trans>
                    </h2>
                )}

            </Fragment>
        )
    }
}

const Title = withTranslation()(TitlePrepare);

export default Title;
