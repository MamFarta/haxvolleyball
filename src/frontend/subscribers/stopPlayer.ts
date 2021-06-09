import ControlButtonUp from 'frontend/events/controlButtonUp';
import { SubscriberCallback } from 'shared/types';

export default <SubscriberCallback> function stopPlayer(notify: ControlButtonUp):void {
  const { player } = notify;
  player.stop(notify.vector);
  notify.cb(notify.timestamp, notify.gameState);
  notify.socket.emit('stopPlayer', notify.roomId, notify.vector, notify.timestamp);
};
