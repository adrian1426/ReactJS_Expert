import React ,{Component} from 'react';

class CustomInput extends Component{
    render(){
        const {input,meta, title,...props} = this.props;
        console.log(meta);
        return(
            <div>
                {title && <span>{title}</span>}
                <input {...input} {...props}/>
                {meta.submitFailed && meta.error && <span>{meta.error}</span>}
            </div>
        );
    }
}

export default CustomInput;