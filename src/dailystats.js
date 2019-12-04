import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import '@firebase/functions'
import './dailystats.css';



export default class DailyStats extends React.Component {



    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        

        this.state = { 
            hoveredCell: false,
            database: firebase.database()
        };
    }
    componentDidMount(){
        this.state.database.ref('MOLAppStateStats/screenStatsCount').on("value", value =>{
            
            const statsData = value.val();
            console.log(statsData);
            if(statsData != null){
                const {Unfilled=0, activeDevices=0, birthreg=0, contents=0,general=0,mapcontent=0} = statsData;
                this.updateStates("Unfilled", Unfilled);
                this.updateStates("activeDevices", activeDevices);
                this.updateStates("birthreg", birthreg);
                this.updateStates("contents", contents);
                this.updateStates("general", general);
                this.updateStates("mapcontent", mapcontent);
            }
        });
        /*this.state.database.ref('MOLAppStateStats').child("screenStats/{a}/appStart/currentCount")
        .on("value", value =>{
            console.log("data:");
            console.log(value.val());
            //this.updateStates("a", value.val());
        });*/
    }
    componentWillUnmount(){
        //this.state.database.off();
    }

    updateStates(key,stats){
        this.setState({
            [key]:stats
        });
    }

    resetAnayticsData(){
        var resetFunction = firebase.functions().httpsCallable("resetStats");
        resetFunction();
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <div class="grid-container">
                        <div class="other-stats">
                            <button onClick={e=>this.resetAnayticsData()}> RESET</button>
                        </div>
                        <div class="activeUsers">
                            <p>
                                Active users
                            </p>
                            <h1>{this.state.activeDevices}</h1>
                        </div>
                        <div class="other-stats">
                            <p>
                                Birth registration
                            </p>
                            <h1>{this.state.birthreg}</h1>
                        </div>
                        <div class="other-stats">
                            <p>
                                Preschool / BBAI
                            </p>
                            <h1>{this.state.mapcontent}</h1>
                        </div>
                        <div class="other-stats">
                            <p>
                                Contents
                            </p>
                            <h1>{this.state.contents}</h1>
                        </div>
                        <div class="other-stats">
                            <p>
                                General
                            </p>
                            <h1>{this.state.general}</h1>
                        </div>
                        <div class="other-stats">
                            <p>
                                Untracked
                            </p>
                            <h1>{this.state.Unfilled}</h1>
                        </div>
                    </div>
                    <div>

                    </div>
                    
                </header>
                <div>
                    <h1>Details view</h1>
                    
                </div>
            </div>
        );
        
        /*const {hoveredCell} = this.state;
        
        return (<div>
                <h1>Hello,44 {this.state.activeState}</h1>
                <Sunburst
                    onValueMouseOver={v =>
                        this.setState({hoveredCell: v.angle && v.angle0 ? v : false})//v.x && v.y ? v : false})
                    }
                    onValueMouseOut={v => this.setState({hoveredCell: false})}
                    animation={{damping: 20, stiffness: 300}}
                    data={data}
                    colorType={'category'}
                    colorRange={DIVERGING_COLOR_SCALE}
                    style={{stroke: '#fff'}}
                    height={300}
                    width={350}
                    getLabel={d => d.name}
                >
                     {hoveredCell ? (
                    <Hint value={this.buildValue(hoveredCell)}>
                        <div style={tipStyle}>
                        <div style={{...boxStyle, background: hoveredCell.clr}} />
                        {hoveredCell.clr}
                        </div>
                    </Hint>
                    ) : null}
                </Sunburst>
                
            </div>);
        */

    }
  }