//
//  CalendarManager.m
//  SpikeHybrid
//
//  Created by Carlos Valarezo Loaiza on 2/28/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
#import "CalendarManager.h"

@implementation CalendarManager
// To export a module named CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
  NSLog(@"%@", location);
  NSLog(@"%@", time);
}
@end
