module.exports = {
  name: 'igm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/igm',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
