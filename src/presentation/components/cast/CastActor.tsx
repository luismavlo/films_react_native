import { Image, Text, View } from 'react-native'
import { Cast } from '../../../core/entities/cast.entity'

interface Props {
  actor: Cast
}

export const CastActor = ({ actor }: Props ) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: actor.avatar }}
        style={{ width: 100, height: 150, borderRadius: 10 }}
      />

      <View style={ styles.actorInfo }>
        <Text style={styles.text}>{ actor.name }</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{ actor.character }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  }
});