/***************************************************************************************
* Copyright 2018 Adobe. All rights reserved.
* This file is licensed to you under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License. You may obtain a copy
* of the License at http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under
* the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
* OF ANY KIND, either express or implied. See the License for the specific language
* governing permissions and limitations under the License.
***************************************************************************************/

export default class VideoPlayer {
  constructor(dispatcher) {
    this._dispatcher = dispatcher;
  }

  open() {}

  destroy() {}

  play() {}

  pause() {}

  get id() { throw new Error('Not Implemented'); }

  get volume() { throw new Error('Not Implemented'); }

  set volume(level) { throw new Error('Not Implemented'); }

  get currentTime() { throw new Error('Not Implemented'); }

  set currentTime(time) { throw new Error('Not Implemented'); }

  get qosInfo() { throw new Error('Not Implemented'); }

  on(type, fn, ctx) {
    this._dispatcher.on(type, fn, ctx);
  }

  off(type, fn, ctx) {
    this._dispatcher.off(type, fn, ctx);
  }

  trigger(event) {
    this._dispatcher.trigger(event);
  }
}
