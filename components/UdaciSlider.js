import React from 'react'
import { View, Text, Slider, StyleSheet, Platform } from 'react-native'
import {white, purple, gray } from '../utils/colors'
export default function UdaciSlider ({max, unit, step, value, onChange }){
	return(
		<View style={[styles.row]}>
			<Slider style={{flex:1}}
				step={step}
				value={value}
				maximumValue={max}
				minimumValue={0}
				onValueChange={onChange}
			/>
			<View style={styles.metricCounter}>
				<Text style={{fontSize:25, textAlign:'center'}}>{value}</Text>
				<Text style={{fontSize:18, color:gray, textAlign:'center'}}>{unit}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	row:{
		flexDirection:'row',
		flex:1,
		alignItems:'center'
	},
	metricCounter:{
		width:85,
		justifyContent:'center',
		// backgroundColor:purple,
		alignItems:'center'
	}
})
