import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router';

// Removes preceeding '#' chars from string, if any.
function sanitize(myStr: string): string {
    if (!myStr) {
        return myStr;
    }
    let i = 0;
    // Find index of first non-#
    for (i = 0; i < myStr.length; i++) {
        if (myStr[i] !== '#') {
            break;
        }
    }
    return myStr.slice(i);
}

class About extends React.Component<{} & RouteComponentProps, any> {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }

    createTable(searchParams: URLSearchParams) {
        let table: JSX.Element[] = [];
        searchParams.forEach((value, key) =>
            table.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>));
            return table;
    }

    render() {
        console.log(this.props);
        const { match, location, history } = this.props;
        var paramsString = sanitize(location.hash);
        var searchParams = new URLSearchParams(paramsString);
        if (searchParams.has('hideabout')) {
            return (
                <div>
                    <p> Shhhhh.... secret!</p>
                </div>
            );
            }
        return (
            <div>
                <p> About.</p>
                <table><tbody>
                  {this.createTable(searchParams)}
                  </tbody></table>
                {this.props.location.hash}
            </div>
        );
    }
}

export default About;