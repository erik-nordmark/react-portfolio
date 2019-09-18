import * as React from "react";
import './SectionHeader.scss';
import { any } from "prop-types";
import { fail } from "assert";

interface SectionHeaderProps {
    text: string;
}

interface SectionHeaderState {
    showHeader: boolean
}

export class SectionHeader extends React.Component<SectionHeaderProps, SectionHeaderState> {

    private div: React.RefObject<HTMLDivElement>;
    instance: any;

    constructor(props:any){
        super(props)
        this.div = React.createRef();
        this.state = { showHeader: true }
      }

    componentDidMount() {
        var offset = this.instance.getBoundingClientRect().top

        var header = parseInt(offset);
        window.addEventListener('scroll', this._calcScroll.bind(this, header));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this._calcScroll)
    }
    
    _calcScroll(header:any) {
        var windowHeight = window.innerHeight;
        var treshhold = 50;

        if (this.instance) {
            var offset = this.instance.getBoundingClientRect().top

            if (offset > treshhold && offset < windowHeight - treshhold) {
    
                if (this.state.showHeader !== (offset > treshhold && offset < windowHeight - treshhold)) {
                    this.setState({
                        showHeader: true
                    });
                }
            } else {
    
                if (this.state.showHeader !== (offset > treshhold && offset < windowHeight - treshhold)) {
                    this.setState({
                        showHeader: false
                    });
                }
            }
        }
        
    }

    render() {

        return (
            <div key={Math.random() * (10000 - 1)} ref={(div) => this.instance = div }  className={"header-container " + (this.state.showHeader ? 'fade-in' : 'fade-out' )} >
                <div className="header-text">
                    <h2>{this.props.text}</h2>
                </div>
                <div className="header-shape" />
            </div>

        );
    }
}