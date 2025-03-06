import {View, Text, useWindowDimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit'
//import {lineChartData} from './data';
import {lineChartData} from './data';

const LineChartDemo = ()=>{
    const {width} = useWindowDimensions();
    return (
     <View>
        
         <LineChart
         data={lineChartData}
         yAxisLabel=''
         yAxisSuffix=''
         width={320}
         height={200}
         chartConfig={{
             backgroundGradientFrom:'#ffffff',
             backgroundGradientFromOpacity: 0.5,
             backgroundGradientTo:'#ffffff',
             backgroundGradientToOpacity: 1,
             color:()=> 'red',
             barPercentage: 0.6,
             propsForDots:{
                r:'6',
                strokeWidth: '3',
                stroke:'black'
             }
         }}
         style={{borderRadius:20}}
         withInnerLines={false}
         withShadow={false}
         getDotColor={()=> 'yellow'}
         hidePointsAtIndex={[3]}
         bezier
         // verticalLabelRotation={50}
         // horizontalLabelRotation={40}
         />
     </View>
    )
}

export default LineChartDemo